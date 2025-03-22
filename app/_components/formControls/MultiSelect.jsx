import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Select from "react-select";

export default function MultiSelect({ form, tagOptions }) {
  return (
    <FormField
      control={form.control}
      name="tags[]"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select
              isMulti
              options={tagOptions}
              value={field.value}
              onChange={(selectedOptions) => {
                field.onChange(selectedOptions);
              }}
              placeholder="Select tags..."
              classNames="rounded-xl"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
