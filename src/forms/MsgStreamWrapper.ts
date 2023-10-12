import { FormArray, FormInstance, FormWrapper } from "@codeffekt/ce-core-data";


export interface MsgStream {
    subject: string;
    stream: FormArray;
}

export class MsgStreamWrapper extends FormWrapper<MsgStream> {

    constructor(form?: FormInstance) {

        const props: MsgStream = {
            subject: undefined,
            stream: {
                root: undefined,
                elts: []
            }
        };

        super(props, form);
    }

}