import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'/home'}>
        Go Home
      </Button>
    </div>
  )
}
