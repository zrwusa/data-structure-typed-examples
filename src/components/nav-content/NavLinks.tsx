import './NavLinks.scss';
import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DirtyLensIcon from '@mui/icons-material/DirtyLens';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DataArrayIcon from '@mui/icons-material/DataArray';
import {LinkPlain} from '../link-plain';
// import CabinIcon from '@mui/icons-material/Cabin';
// import HouseIcon from '@mui/icons-material/House';
// import ForkRightIcon from '@mui/icons-material/ForkRight';
// import ForkLeftIcon from '@mui/icons-material/ForkLeft';
// import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
// import DeveloperBoardOffIcon from '@mui/icons-material/DeveloperBoardOff';
// import NetworkPingIcon from '@mui/icons-material/NetworkPing';


const NavLinks: React.FunctionComponent = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {/*<ListItemButton onClick={handleClick}>*/}
                {/*    <ListItemIcon>*/}
                {/*        <DirtyLensIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText primary="Algorithm"/>*/}
                {/*    {open ? <ExpandLess/> : <ExpandMore/>}*/}
                {/*</ListItemButton>*/}
                {/*<Collapse in={open} timeout="auto" unmountOnExit>*/}
                    <List component="div" disablePadding>

                        <LinkPlain to="/algorithm/tree">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <DeviceHubIcon/>
                                </ListItemIcon>
                                <ListItemText>Tree</ListItemText>
                            </ListItemButton>
                        </LinkPlain>
                        <LinkPlain to="/algorithm/graph">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <AccountTreeIcon/>
                                </ListItemIcon>
                                <ListItemText>Graph</ListItemText>
                            </ListItemButton>
                        </LinkPlain>
                        <LinkPlain to="/algorithm/linked-list">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <LinearScaleIcon/>
                                </ListItemIcon>
                                <ListItemText>Linked List</ListItemText>
                            </ListItemButton>
                        </LinkPlain>
                        <LinkPlain to="/algorithm/dfs-combination-permutation">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <LinearScaleIcon/>
                                </ListItemIcon>
                                <ListItemText>DFS Combination
                                    Permutation</ListItemText>
                            </ListItemButton>
                        </LinkPlain>


                        <LinkPlain to="/algorithm/dp">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <LinearScaleIcon/>
                                </ListItemIcon>
                                <ListItemText>Dynamic Programing</ListItemText>
                            </ListItemButton>
                        </LinkPlain>

                        <LinkPlain to="/algorithm/hash">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <LinearScaleIcon/>
                                </ListItemIcon>
                                <ListItemText>Hash (Map, Set)</ListItemText>
                            </ListItemButton>
                        </LinkPlain>

                        <LinkPlain to="/algorithm/heap-priority-queue">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <LowPriorityIcon/>
                                </ListItemIcon>
                                <ListItemText>Heap Priority Queue</ListItemText>
                            </ListItemButton>
                        </LinkPlain>
                        <LinkPlain to="/algorithm/queue-deque">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <PeopleOutlineIcon/>
                                </ListItemIcon>
                                <ListItemText>Queue Deque</ListItemText>
                            </ListItemButton></LinkPlain>
                        <LinkPlain to="/algorithm/matrix">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <LinearScaleIcon/>
                                </ListItemIcon>
                                <ListItemText>Matrix</ListItemText>
                            </ListItemButton></LinkPlain>
                        <LinkPlain to="/algorithm/sliding-window"><ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <LinearScaleIcon/>
                            </ListItemIcon>
                            <ListItemText>Sliding Window</ListItemText></ListItemButton></LinkPlain>

                        <LinkPlain to="/algorithm/stack">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <LinearScaleIcon/>
                                </ListItemIcon>
                                <ListItemText>Stack</ListItemText></ListItemButton></LinkPlain>

                        <LinkPlain to="/algorithm/two-pointers">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <LinearScaleIcon/>
                                </ListItemIcon>
                                <ListItemText>Two Pointers</ListItemText>
                            </ListItemButton>
                        </LinkPlain>

                        <LinkPlain to="/algorithm/uncategorized">
                            <ListItemButton sx={{pl: 4}}>
                                <ListItemIcon>
                                    <DataArrayIcon/>
                                </ListItemIcon>
                                <ListItemText>
                                    Uncategorized
                                </ListItemText>
                            </ListItemButton>
                        </LinkPlain>
                    </List>
                {/*</Collapse>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <CabinIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <LinkPlain to="/">Home</LinkPlain>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <HouseIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <LinkPlain to="/demo-home">Demo Home</LinkPlain>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <ForkRightIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <LinkPlain to="/demo-route-cate/1">Demo Route Cate A</LinkPlain>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <ForkLeftIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <LinkPlain to="/demo-route-cate/2">Demo Route Cate B</LinkPlain>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <LowPriorityIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <LinkPlain to="/demo-fc-redux-hook">Demo FC Redux Hook</LinkPlain>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <DeveloperBoardOffIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <LinkPlain to="/demo-thunk-cc">Demo Thunk CC</LinkPlain>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <DeveloperBoardIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <LinkPlain to="/demo-thunk-fc">Demo Thunk FC</LinkPlain>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <NetworkPingIcon/>*/}
                {/*    </ListItemIcon>*/}
                {/*    <LinkPlain to="/demo-redirect">Demo Redirect</LinkPlain>*/}
                {/*</ListItemButton>*/}
                {/*<ListItemButton>*/}
                {/*    <ListItemIcon>*/}
                {/*        <DraftsIcon />*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText primary="Drafts" />*/}
                {/*</ListItemButton>*/}
            </List>
        </>
    );
};

export default NavLinks;
