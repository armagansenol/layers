import s from './select.module.scss'
import React, { useState } from 'react'

import cn from 'clsx'
import * as RadixSelect from '@radix-ui/react-select'
import IconArrowDropdown from '../icons/icon-arrow-dropdown'
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
        {props.ui}
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
}

const Select = ({ options = [], callback, label = 'Select' }: Props) => {
  return (
    <RadixSelect.Root onValueChange={callback}>
      <RadixSelect.Trigger className={s.selectTrigger} aria-label="select">
        <RadixSelect.Value placeholder={label}></RadixSelect.Value>
        <RadixSelect.Icon className={s.selectIcon}>
          <IconArrowDropdown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className={cn(s.selectContent, 'cursor-pointer')}>
          <RadixSelect.ScrollUpButton className={s.selectScrollButton}>
            <div className={cn(s.iconC, s.up)}>
              <IconArrowDropdown />
            </div>
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className={s.selectViewport}>
            <RadixSelect.Group>
              {options.map((option, i) => {
                return (
                  <>
                    <SelectItem value={option.value} key={i} ui={option.ui}>
                      {option.value}
                    </SelectItem>
                  </>
                )
              })}
            </RadixSelect.Group>
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className={s.selectScrollButton}>
            <div className={s.iconC}>
              <IconArrowDropdown />
            </div>
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export default Select
