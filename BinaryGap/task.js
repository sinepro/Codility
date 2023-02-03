// Get binary number from decimal
const dec_to_bin = (dec) => {
    return (dec >>> 0).toString(2);
}

// Get binary gaps in binary number
const get_bin_gaps = (bin) => {
    let bin_gap = 0;
    let bin_gaps = [0];
    let bin_gap_start = false;

    for(let i = 0; i < bin.length; i++) {
        if(bin[i] === '1' && !bin_gap_start) {
            bin_gap_start = true;
        }
        
        if(bin[i] === '1' && bin_gap_start && bin_gap > 0) {
            bin_gaps.push(bin_gap);
            bin_gap = 0;
        }

        if(bin[i] === '0' && bin_gap_start) {
            bin_gap += 1;
        }  
    }

    return bin_gaps;
}

// Get highet number in array
const get_highest_bin_gap = (bin_gaps) => {
    let highest_bin = 0;

    bin_gaps.forEach((value, index, array) => {
        if(highest_bin < value) {
            highest_bin = value;
        }
    });

    return highest_bin;
}

// Solution
function solution(N) {

    const bin = dec_to_bin(N);

    const bin_gaps = get_bin_gaps(bin);

    const bin_gap = get_highest_bin_gap(bin_gaps);

    return bin_gap;
}
