export default function bs_list(haystack: number[], needle: number): boolean {
    // take the starting and ending points

    // find the middlepoint

    // compare if the value on the middle is eql to needle

    // if so, return true

    // if not, check if the middle value is greater than needle

    // if so, assign middle point to heighest point

    // if not, assign middle point to heighest point + 1

    // return step 3 unless heighest point gets lower than lower point.

    let lowestVal = 0,
        heightestVal = haystack.length;
    do {
        const middleValue = Math.floor(
            lowestVal + (heightestVal - lowestVal) / 2,
        );
        const value = haystack[middleValue];
        if (value === needle) {
            return true;
        } else if (value > needle) {
            heightestVal = middleValue;
        } else {
            lowestVal = middleValue + 1;
        }
    } while (lowestVal < heightestVal);

    return false;
}
