import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const SOCIALS = [
    { label: "X", href: "https://x.com/alara_martin_", Icon: XLogoIcon },
    {
        label: "GitHub",
        href: "https://github.com/alaramartin",
        Icon: GithubLogoIcon,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/alara-martin",
        Icon: LinkedinLogoIcon,
    },
];

export default function Socials() {
    return (
        <>
            {SOCIALS.map(({ label, href, Icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="corner-icon"
                >
                    <Icon size={23} />
                </a>
            ))}
        </>
    );
}
