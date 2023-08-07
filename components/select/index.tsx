import React from 'react'
import s from './select.module.scss'

import cn from 'clsx'
import * as RadixSelect from '@radix-ui/react-select'
// import {
//   CheckIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
// } from '@radix-ui/react-icons'

const SelectItem: any = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={cn(s.selectItem, className)}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className={s.selectItemIndicator}>
          {/* <CheckIcon /> */}
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    )
  }
)

SelectItem.displayName = 'SelectItem'

type Props = {
  options: any[]
}

const Select = ({ options = [] }: Props) => {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className={s.selectTrigger} aria-label="TimeZone">
        <RadixSelect.Value placeholder="Select Timezone" />
        <RadixSelect.Icon className={s.selectIcon}>
          {/* <ChevronDownIcon /> */}
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className={s.selectContent}>
          <RadixSelect.ScrollUpButton className={s.selectScrollButton}>
            {/* <ChevronUpIcon /> */}
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className={s.selectViewport}>
            <RadixSelect.Group>
              <RadixSelect.Label className={s.selectLabel}>
                Time Zones
              </RadixSelect.Label>
              {options.map((option, i) => {
                return (
                  <SelectItem value={option} key={i}>
                    {option}
                  </SelectItem>
                )
              })}
            </RadixSelect.Group>
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className={s.selectScrollButton}>
            {/* <ChevronDownIcon /> */}
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export default Select
