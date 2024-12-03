import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  return (
    <section className="bg-primary px-4 py-20 text-white md:px-6">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold">Join the PureWood Family</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl">
          Subscribe to our newsletter for exclusive offers, new product announcements, and expert
          tips on fostering your child's development through play.
        </p>
        <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <Input type="email" placeholder="Enter your email" className="text-primary bg-white" />
          <Button type="submit" variant="secondary" size="lg">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
