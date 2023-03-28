/**********************************************************************
Generates a random placeholder image for a speaker

css:    css class for <img> element
name:   identifier for the speaker that gets hashed
path:   the path to the image with a # for the image. # gets replaced
alt:    alt text for the image
num:    total number of placeholder image options for modulo
***********************************************************************/

function placeholderImage(css, name, path, alt, num) {
    const hashCode = function(str) {
        if (Array.prototype.reduce) {
            return str.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
        } else {
            var hash = 0, i, chr, len;
            if (str.length == 0) return hash;
            for (i = 0, len = str.length; i < len; i++) {
                chr = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        }
    };

    var output = '<img ';
    output += 'class="' + css + '" ';
    output += 'alt="' + alt + '" ';
    output += 'src="' + path.replace('#', Math.abs(hashCode(name)) % 10) + '" ';
    output = output.trim() + '>';
    document.write(output);
}