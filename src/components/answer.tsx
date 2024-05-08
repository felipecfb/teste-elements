import { Label } from './ui/label'
import { RadioGroupItem } from './ui/radio-group'

interface QuestionItemProps {
  option: string
  onClick: (option: string) => void
}

export function Answer({ option, onClick }: QuestionItemProps) {
  return (
    <div className="flex items-center space-x-2 border-2 border-zinc-700 p-2 rounded-lg hover:border-purple-600">
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
