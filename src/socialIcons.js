import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from './components/Icons'

/** Maps a social `label` from content.js to its icon component. */
const map = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: MailIcon,
}

export function iconFor(label) {
  return map[label] ?? ArrowUpRight
}
