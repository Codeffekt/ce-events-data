import { FormArray, FormInstance, FormWrapper } from "@codeffekt/ce-core-data";

export interface PhotoSet {
    photos: FormArray;
}

export class PhotoSetWrapper extends FormWrapper<PhotoSet> {

    constructor(form?: FormInstance) {

        const props: PhotoSet = {
            photos: {
                root: undefined,
                elts: []                
            }
        };

        super(props, form);
    }

}