import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * The safeHTML Pipe bypasses security features built into Angular and allows HTML 
 * to be outputted properly
 */
@Pipe({ name: 'safeHTML' })
export class SafeHTMLPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}