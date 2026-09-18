import { useEffect, useState } from 'react'
import { profile } from '../content'
import Section from './Section'
import { ArrowUpRight, ForkIcon, GithubIcon, StarIcon } from './Icons'

const LANG_COLOR = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
  C: '#555555',
  'C++': '#f34b7d',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
}

function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="card group flex flex-col p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-[0.92rem] text-white">{repo.name}</h3>
        <ArrowUpRight
          width={15}
          height={15}
          className="mt-0.5 shrink-0 text-[#6f7489] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2"
        />
      </div>

      <p className="mt-2 line-clamp-2 flex-1 text-[0.85rem] leading-relaxed text-[#9aa0b4]">
        {repo.description || 'No description yet.'}
      </p>

      <div className="mt-4 flex items-center gap-4 text-[0.74rem] text-[#6f7489]">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className="size-2 rounded-full"
              style={{ background: LANG_COLOR[repo.language] ?? '#8b90a3' }}
            />
            {repo.language}
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <StarIcon width={13} height={13} />
          {repo.stargazers_count}
        </span>
        <span className="inline-flex items-center gap-1">
          <ForkIcon width={13} height={13} />
          {repo.forks_count}
        </span>
      </div>
    </a>
  )
}

function SkeletonCard() {
  return (
    <div className="card animate-pulse p-5">
      <div className="h-3.5 w-1/2 rounded bg-white/8" />
      <div className="mt-3 h-3 w-full rounded bg-white/5" />
      <div className="mt-2 h-3 w-4/5 rounded bg-white/5" />
      <div className="mt-5 h-3 w-1/3 rounded bg-white/5" />
    </div>
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
        const top = data
          .filter((r) => !r.fork && !r.archived)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at) - new Date(a.pushed_at),
          )
          .slice(0, 6)
        setRepos(top)
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
      id="github"
      eyebrow="04 — Open source"
      title="Live from GitHub"
      lead={`Pulled straight from @${profile.githubUsername} — this list updates itself whenever I push something new.`}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos === null && !error &&
          Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}

        {repos?.map((r) => <RepoCard key={r.id} repo={r} />)}

        {(error || repos?.length === 0) && (
          <div className="card col-span-full p-8 text-center">
            <p className="text-[0.92rem] text-[#9aa0b4]">
              {error
                ? 'Couldn’t reach the GitHub API right now.'
                : 'No public repositories to show yet — new projects will appear here automatically.'}
            </p>
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[0.85rem] text-white transition-colors hover:border-accent/60"
            >
              <GithubIcon width={15} height={15} />
              Visit the profile
            </a>
          </div>
        )}
      </div>

      {repos?.length > 0 && (
        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${profile.githubUsername}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-2.5 text-[0.85rem] text-white transition-colors hover:border-accent/60 hover:bg-accent/10"
          >
            <GithubIcon width={15} height={15} />
            See all repositories
          </a>
        </div>
      )}
    </Section>
  )
}
