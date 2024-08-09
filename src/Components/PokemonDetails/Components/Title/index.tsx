interface Props {
  content: string;
}

export const Title = ({ content }: Props) => {
  return <span>{content}</span>;
};
