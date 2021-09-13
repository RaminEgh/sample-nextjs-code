import {Box} from "@material-ui/core";
import TableWithSortAndSelect from "../../../components/Table/TableWithSortAndSelect";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../../store/actions/admin-action/user-action";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {_ADMIN_USER_EDIT} from "../../../constants/frontPath";

const Index = () => {
    const dispatch = useDispatch();
    const {users, pagination} = useSelector(state => state.adminUserRdcr);
    const [session, loading] = useSession();
    const router = useRouter()
    useEffect(() => {
        const page = router.query.page || 1;
        const params = `?page=${page}`
        dispatch(getUsers(session.accessToken, params))
    }, [router.query]);

    const actions = [
        {
            label: 'ویرایش',
            url: _ADMIN_USER_EDIT
        }
    ]


    const heads = [
        { id: 'name', numeric: false, disablePadding: true, label: 'نام' },
        { id: 'email', numeric: false, disablePadding: true, label: 'پست الکترونیکی' },
        { id: 'actions', numeric: false, disablePadding: true, label: 'عملیات' },
    ];

    return (
        <Box my={2}>
            <TableWithSortAndSelect
                actions={actions}
                rows={users}
                heads={heads}
                pagination={pagination}
            />
        </Box>

    );
};

export default Index;