import './style.scss'
import TomSelect from "tom-select";

new TomSelect(document.querySelector<HTMLSelectElement>('#mySelect')!, {
    options: [
        {
            value: `option_1`,
            text: `Option 1`,
        },
        {
            value: `option_2`,
            text: `Option 2`,
        },
        {
            value: `option_3`,
            text: `Option 3`,
        },
        {
            value: `option_4`,
            text: `Option 4`,
        },
        {
            value: `option_5`,
            text: `Option 5`,
        },
    ],
    placeholder: 'Choose an option',
});