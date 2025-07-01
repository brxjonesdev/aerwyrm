import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useMDXComponents } from '../../../../mdx-components';

type PostProps = {
  source: MDXRemoteSerializeResult; // your serialized MDX content
};

export default function Content({ source }: PostProps) {
  const components = useMDXComponents({});

  return (
    <article>
      <MDXRemote {...source} components={components} />
    </article>
  );
}
