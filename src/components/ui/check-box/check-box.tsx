import * as Checkbox from '@radix-ui/react-checkbox'

import s from './check-box.module.scss'

import { CheckIcon, CheckIconDisabled } from '@/assets/icons'

type Props = {
  value: string
  disabled?: boolean
}

const CheckboxDemo = (props: Props) => {
  const { value, disabled } = props

  return (
    <form>
      <div className={disabled ? s.disabled : s.header}>
        <Checkbox.Root disabled={disabled} className={s.CheckboxRoot}>
          <div className={s.CheckboxIndicator}>
            <Checkbox.Indicator>
              {disabled ? <CheckIconDisabled /> : <CheckIcon />}
            </Checkbox.Indicator>
          </div>
        </Checkbox.Root>
        <label className={s.Label} htmlFor="c1">
          {value}
        </label>
      </div>
    </form>
  )
}

export default CheckboxDemo
