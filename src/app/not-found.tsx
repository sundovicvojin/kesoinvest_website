import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-contrast text-white">
      <Container width="wide">
        <Eyebrow className="text-white/50">404</Eyebrow>
        <h1 className="type-display mt-6 max-w-[9ch]">Stranica nije pronađena</h1>
        <Button className="mt-10" href="/" variant="inverse">Povratak na početnu</Button>
      </Container>
    </section>
  );
}
