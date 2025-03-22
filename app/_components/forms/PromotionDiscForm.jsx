import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ButtonCustom from "../Button";
import DateSelector from "../DateSelector";
import { ControlledInput, SelectInput } from "../formControls";

export default function PromotionDiscForm() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-y-5 gap-x-4">
        <div className="col-span-full">
          {/* <ControlledInput
            label="Promotion Name"
            placeholder="e.g., Summer Flash Sale"
          /> */}
          <Input placeholder="e.g., Summer Flash Sale" />
        </div>

        <Select defaultValue="perc">
          <SelectTrigger>
            <SelectValue placeholder="Select Promotion" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="perc" value="perc">
              Percentage
            </SelectItem>
            <SelectItem key="-" value="-">
              --
            </SelectItem>
          </SelectContent>
        </Select>
        {/* <SelectInput
          label="Type of Promotion"
          className="!w-full"
          variant="outlined"
        /> */}

        <Input placeholder="e.g., 20% off" />
        {/* <ControlledInput placeholder="e.g., 20% off" className="self-end" /> */}
        <div className="col-span-full">
          <SelectInput
            label="Applicable Services"
            className="!w-full"
            variant="outlined"
          />
        </div>
        <ControlledInput label="Promo Code" placeholder="e.g., TRAVEL20" />
        <DateSelector label="Promotion Duration" className="self-end" />
        <SelectInput
          label="Discount Conditions"
          className="!w-full"
          variant="outlined"
        />
        <ControlledInput placeholder="e.g., $200" className="self-end" />
        <ButtonCustom className="col-span-full">Create Promo</ButtonCustom>
      </div>
    </form>
  );
}
