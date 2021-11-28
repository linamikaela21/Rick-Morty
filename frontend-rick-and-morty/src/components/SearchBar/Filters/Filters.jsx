import { Select } from "../../Common/Select"

export const Filters = (props) => {
    return (
<div>
    <div>
    <Select 
        label={props.labelName}
        optionOne={props.nameAsc}
        optionTwo={props.nameDesc}
        />
    </div>
    <div>
    <Select 
        label={props.labelBoolean}
        optionOne={props.boolean}
        optionTwo={props.boolean}
        />
    </div>
    <div>
    <Select 
        label={props.labelmoreOne}
        optionOne={props.moreOne}
        optionTwo={props.moreOne}
        optionThree={props.moreOne}
        />
    </div>
</div>
    )
}
