import React from 'react'
import s from './select.module.scss'

import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import cn from 'clsx'

const SelectItem: any = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={cn(s.selectItem, className)}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)

SelectItem.displayName = 'SelectItem'

type Props = {
  label: string
  options: { ui: string; value: string }[]
  callback: (value: string) => void
  defaultValue?: string
  value?: string
}

const Select = ({
  callback,
  defaultValue = '',
  label = 'Select',
  options = [],
  value = '',
}: Props) => {
  return (
    <RadixSelect.Root
      onValueChange={callback}
      {...(defaultValue && { defaultValue: defaultValue })}
      {...(value && { value: value })}
    >
      <RadixSelect.Trigger className={s.selectTrigger} aria-label="select">
        <RadixSelect.Value placeholder={label} />
        <RadixSelect.Icon className={s.selectIcon}>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className={cn(s.selectContent, 'cursor-pointer')}>
          <RadixSelect.ScrollUpButton className={s.selectScrollButton}>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className={s.selectViewport}>
            <RadixSelect.Group>
              {options.map((option, i) => {
                return (
                  <SelectItem value={option.value} key={i}>
                    {option.ui}
                  </SelectItem>
                )
              })}
            </RadixSelect.Group>
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className={s.selectScrollButton}>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export default Select
