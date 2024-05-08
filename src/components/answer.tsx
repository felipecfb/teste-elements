import { Label } from './ui/label'
import { RadioGroupItem } from './ui/radio-group'

interface QuestionItemProps {
  option: string
  checked?: boolean
  onClick: (option: string) => void
}

export function Answer({ option, checked, onClick }: QuestionItemProps) {
  return (
    <div
      className={`flex items-center space-x-2 border-2 ${checked ? 'border-purple-700' : 'border-zinc-700'} p-2 rounded-lg hover:border-purple-600`}
    >
      <RadioGroupItem
        value={option}
        id={option.toLowerCase().trim()}
        onClick={() => onClick(option)}
      />
      <Label
        htmlFor={option.toLowerCase().trim()}
        className="text-base text-zinc-950 font-normal w-full cursor-pointer"
      >
        {option}
      </Label>
    </div>
  )
}
