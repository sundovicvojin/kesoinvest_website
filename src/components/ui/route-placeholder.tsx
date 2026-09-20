type RoutePlaceholderProps = {
  route: string;
  title: string;
};

export function RoutePlaceholder({ route, title }: RoutePlaceholderProps) {
  return (
    <Container className="foundation-page" width="wide">
      <Eyebrow>Design system preview</Eyebrow>
      <Heading as="h1" size="h1">
        {title}
      </Heading>
      <p>
        Tehnička placeholder stranica za rutu <code>{route}</code>. Sadržaj i
        dizajn biće implementirani u narednim odobrenim fazama.
      </p>
    </Container>
  );
}
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
