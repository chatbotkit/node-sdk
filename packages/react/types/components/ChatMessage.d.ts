/**
 * @param {{
 *   text: string,
 * } & Pick<import('react-markdown').Options,'remarkPlugins'|'rehypePlugins'|'components'> & import('react').HTMLProps<HTMLDivElement>} props
 */
export function ChatMessage(props: {
    text: string;
} & Pick<import("react-markdown").Options, "remarkPlugins" | "rehypePlugins" | "components"> & import("react").HTMLProps<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
