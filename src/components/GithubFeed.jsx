import { useEffect, useState } from 'react'
import { profile } from '../content'
import { ArrowUpRight, ForkIcon, GithubIcon, StarIcon } from './Icons'
import Section from './Section'

const LANG_COLOR = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
  C: '#8d8d8d',
  'C++': '#f34b7d',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
}

function RepoCard({ repo, index }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer" className="hud group flex flex-col p-4">
      <div className="flex items-start justify-between gap-2 border-b border-line pb-2.5">
        <span className="label">REPO_{String(index + 1).padStart(2, '0')}</span>
        <ArrowUpRight
          width={13}
          height={13}
          className="text-line-hot transition-colors group-hover:text-cyan"
        />
      </div>

      <h3 className="mt-3 truncate text-[0.84rem] font-bold text-white transition-colors group-hover:text-cyan">
        {repo.name}
      </h3>

      <p className="mt-2 line-clamp-2 flex-1 text-[0.74rem] leading-relaxed text-dim">
        {repo.description || 'No description provided.'}
      </p>

      <div className="mt-4 flex items-center gap-3.5 border-t border-line pt-2.5 text-[0.64rem] text-dim">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="size-2"
              style={{ background: LANG_COLOR[repo.language] ?? '#64748b' }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <StarIcon width={11} height={11} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <ForkIcon width={11} height={11} />
          {repo.forks_count}
        </span>
      </div>
    </a>
  )
}

export default function GithubFeed({ onLoaded }) {
  const [repos, setRepos] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=updated`,
        )
        if (!res.ok) throw new Error(String(res.status))
        const data = await res.json()
        if (cancelled) return
        setRepos(
          data
            .filter((r) => !r.fork && !r.archived)
            .sort(
              (a, b) =>
                b.stargazers_count - a.stargazers_count ||
                new Date(b.pushed_at) - new Date(a.pushed_at),
            )
            .slice(0, 6),
        )
        onLoaded?.()
      } catch {
        if (!cancelled) {
          setError(true)
          onLoaded?.()
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Section
      id="repos"
      module="MODULE_05 // LIVE_REPOSITORY_FEED"
      title="Open"
      accent="Source"
      lead={`Queried live from the GitHub REST API for @${profile.githubUsername} — this module updates itself on every push, with no rebuild.`}
    >
      <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos === null && !error && (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="hud p-4">
                <div className="label animate-blink">FETCHING…</div>
                <div className="mt-3 h-3 w-1/2 bg-line" />
                <div className="mt-3 h-2.5 w-full bg-line/60" />
                <div className="mt-2 h-2.5 w-4/5 bg-line/60" />
                <div className="mt-5 h-2.5 w-1/3 bg-line/60" />
              </div>
            ))}
          </>
        )}

        {repos?.map((r, i) => <RepoCard key={r.id} repo={r} index={i} />)}

        {(error || repos?.length === 0) && (
          <div className="hud col-span-full p-8 text-center">
            <p className="module-tag">{error ? '⚠ LINK_ERROR' : '◈ NO_PUBLIC_REPOS'}</p>
            <p className="mt-3 text-[0.8rem] text-dim">
              {error
                ? 'GitHub API unreachable or rate-limited. Try again shortly.'
                : 'No public repositories yet — new pushes appear here automatically.'}
            </p>
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="btn mt-5 !py-1.5 !text-[0.62rem]"
            >
              <GithubIcon width={13} height={13} />
              Open Profile
            </a>
          </div>
        )}
      </div>

      {repos?.length > 0 && (
        <div className="mt-6 text-center">
          <a
            href={`https://github.com/${profile.githubUsername}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="btn !py-1.5 !text-[0.62rem]"
          >
            <GithubIcon width={13} height={13} />
            View All Repositories
          </a>
        </div>
      )}
    </Section>
  )
}
