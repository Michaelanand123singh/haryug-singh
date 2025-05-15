import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'
import { socialLinks } from '../../constants/navigation'

const SocialLinks = ({ className = '' }) => {
  const iconMap = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
  }

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon]
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="hover:text-primary transition-colors"
          >
            <IconComponent size={20} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks