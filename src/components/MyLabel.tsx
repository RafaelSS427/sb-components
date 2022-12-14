import './mylabel.css'

interface Props {
    /** This is the message that the label will show */
    label: string;
    /** Label size */
    size: 'normal'|'h1'|'h2'|'h3';
    /** Color type */
    color?: 'primary' | 'secondary' | 'tertiary';
    /** Change letters to uppercase */
    allCaps?: boolean;
    /** Font color of the label */
    fontColor?: string;
    /** Background color */
    backgroundColor?: string;
}

export const MyLabel = ({ 
    allCaps = false,
    color = 'primary',
    label = 'No label',
    size = 'normal',
    fontColor,
    backgroundColor = 'transparent'
}: Props) => {
    return (
        <span
            style={{
                color: fontColor,
                backgroundColor
            }}
            className={`label ${size} text-${color}`}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}