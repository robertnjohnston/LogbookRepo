import { Pipe, PipeTransform } from "angular2/core"

@Pipe({
    name: "timeFilter"
})
export class TimeFilter implements PipeTransform {
    
    transform(value: number): string {
        return Math.floor(value/60).toString() + ':' + (value%60).toString();
    }
}