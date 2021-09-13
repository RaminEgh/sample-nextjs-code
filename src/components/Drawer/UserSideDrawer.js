import {
    _ADMIN_PANEL,
    _LOGOUT, _MY_POSTS,
    _PANEL,
    _PANEL_CREATE_POST,
    _PANEL_SECURITY,
} from '../../constants/frontPath';
import ResponsiveSideDrawer from "./Tempelate/ResponsiveSideDrawer";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import {session, useSession} from "next-auth/client";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

const UserSideDrawer = ({drawer, toggleDrawer}) => {
    const [session, loading] = useSession();
    const menu = [
        {
            title: 'اطلاعات کاربری',
            icon: <InfoOutlinedIcon/>,
            href: _PANEL
        },
        {
            title: 'امنیت',
            icon: <LockOutlinedIcon/>,
            href: _PANEL_SECURITY
        },
        {
            title: 'پست',
            icon: <DescriptionOutlinedIcon/>,
            children: [
                {
                    title: 'پست های من',
                    href: _MY_POSTS
                },
                {
                    title: 'ایجاد پست جدید',
                    href: _PANEL_CREATE_POST
                }
            ]
        },
        {
            title: 'خروج',
            icon: <ExitToAppOutlinedIcon/>,
            href: _LOGOUT
        }
    ];
    if (!loading && session?.user?.type === 1) {
        menu.push({
            title: 'پنل ادمین',
            icon: <DashboardOutlinedIcon/>,
            href: _ADMIN_PANEL
        })
    }

    return (
        <ResponsiveSideDrawer menu={menu} drawer={drawer} toggleDrawer={toggleDrawer}/>
    )
}

export default UserSideDrawer;
