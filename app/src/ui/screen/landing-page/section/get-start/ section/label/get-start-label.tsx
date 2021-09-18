import { FC } from "react"

type GetStartLabelProps = {
    label: string,

}

const GetStartLabel: FC<GetStartLabelProps> = (props) => {

    const { children, label } = props;

    return (
        <div>
            <label>
                {label}
            </label>
            {children}
        </div>
    )
}

export { GetStartLabel }