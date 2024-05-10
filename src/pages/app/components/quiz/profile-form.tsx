import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField, FormItem, FormLabel } from '../../../../components/ui/form'
import { Input } from '../../../../components/ui/input'
import { useQuiz } from '@/hooks/use-quiz'

const profileSchema = z.object({
  name: z.string().min(2),
})

export function ProfileForm() {
  const { quizState, startQuiz } = useQuiz()

  function handleStartQuiz(values: z.infer<typeof profileSchema>) {
    quizState.name = values.name

    startQuiz()
  }

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleStartQuiz)}
        className="space-y-4 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome completo" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <button
          type="submit"
          className={`font-medium w-full py-2 text-white ${
            form.formState.isValid
              ? 'bg-purple-800 hover:bg-purple-600'
              : 'bg-zinc-300 cursor-not-allowed'
          }`}
        >
          Começar
        </button>
      </form>
    </Form>
  )
}
