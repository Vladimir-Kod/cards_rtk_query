import { Button } from '@/components/ui/button'
import { SelectRoot } from '@/components/ui/select/select.tsx'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'/home'}>
        Go Home
      </Button>
      <SelectRoot />
    </div>
  )
}
