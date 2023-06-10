import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string"

interface CategoryBoxProps {
    icon: IconType;
    label: string,
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        // define empty query
        if (params) {
            //  look through current params and parse them to object instead of string
            currentQuery = qs.parse(params.toString());
        }

        // spread current query and add label category
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        /* check if the new the category is already selected and removed if from updated query if so to deselect it
        like and on/off toggle*/
        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        //  generate url string
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]); // dependency array

    return (
        <div
            onClick={handleClick}
            className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                p-3
                border-b-2
                hover: text-neutral-800
                transition
                cursor-pointer
                ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
        >
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
      );
}

export default CategoryBox;