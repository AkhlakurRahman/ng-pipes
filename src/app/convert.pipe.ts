import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convert"
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, unit: string): unknown {
    if (!value) {
      return "";
    }

    return value * 1.60934;
  }
}
