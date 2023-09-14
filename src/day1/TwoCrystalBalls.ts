export default function two_crystal_balls(breaks: boolean[]): number {
    // given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.
    // assign jmpAmmount as sqrroot of the break so that we can have o(sqr(n))

    // jump until you find breaking step

    // step one jump sqr root of break backwards and go to step 2 by checking every index

    // if another break happens, return the index

    // if not, return -1

    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jmpAmount;

    for (let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
