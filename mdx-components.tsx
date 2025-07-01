import type { MDXComponents } from 'mdx/types';
import { Button } from './src/components/ui/button';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Override or add your custom components here, keys are tag names used in MDX
    button: Button, 
  };
}
