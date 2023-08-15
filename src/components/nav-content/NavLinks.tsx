import './NavLinks.scss';
import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import DirtyLensIcon from '@mui/icons-material/DirtyLens';
import {LinkPlain} from '../link-plain';
import {
    DfsCPIcon,
    DPIcon,
    GraphIcon,
    HashIcon,
    HeapIcon,
    LinkedListIcon,
    MatrixIcon,
    QueueIcon,
    SlidingWindowIcon,
    StackIcon,
    TreeIcon,
    TwoPointersIcon,
    UncategorizedIcon
} from '../icons';
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
                                <TreeIcon/>
                            </ListItemIcon>
                            <ListItemText>Tree</ListItemText>
                        </ListItemButton>
                    </LinkPlain>
                    <LinkPlain to="/algorithm/graph">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <GraphIcon/>
                            </ListItemIcon>
                            <ListItemText>Graph</ListItemText>
                        </ListItemButton>
                    </LinkPlain>
                    <LinkPlain to="/algorithm/linked-list">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <LinkedListIcon/>
                            </ListItemIcon>
                            <ListItemText>Linked List</ListItemText>
                        </ListItemButton>
                    </LinkPlain>
                    <LinkPlain to="/algorithm/dfs-combination-permutation">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <DfsCPIcon/>
                            </ListItemIcon>
                            <ListItemText>DFS Combination
                                Permutation</ListItemText>
                        </ListItemButton>
                    </LinkPlain>


                    <LinkPlain to="/algorithm/dp">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <DPIcon/>
                            </ListItemIcon>
                            <ListItemText>Dynamic Programing</ListItemText>
                        </ListItemButton>
                    </LinkPlain>

                    <LinkPlain to="/algorithm/hash">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <HashIcon/>
                            </ListItemIcon>
                            <ListItemText>Hash (Map, Set)</ListItemText>
                        </ListItemButton>
                    </LinkPlain>

                    <LinkPlain to="/algorithm/heap-priority-queue">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <HeapIcon/>
                            </ListItemIcon>
                            <ListItemText>Heap Priority Queue</ListItemText>
                        </ListItemButton>
                    </LinkPlain>
                    <LinkPlain to="/algorithm/queue-deque">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <QueueIcon/>
                            </ListItemIcon>
                            <ListItemText>Queue Deque</ListItemText>
                        </ListItemButton>
                    </LinkPlain>
                    <LinkPlain to="/algorithm/matrix">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <MatrixIcon/>
                            </ListItemIcon>
                            <ListItemText>Matrix</ListItemText>
                        </ListItemButton>
                    </LinkPlain>
                    <LinkPlain to="/algorithm/sliding-window">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <SlidingWindowIcon/>
                            </ListItemIcon>
                            <ListItemText>Sliding Window</ListItemText>
                        </ListItemButton>
                    </LinkPlain>

                    <LinkPlain to="/algorithm/stack">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <StackIcon/>
                            </ListItemIcon>
                            <ListItemText>Stack</ListItemText></ListItemButton></LinkPlain>

                    <LinkPlain to="/algorithm/two-pointers">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <TwoPointersIcon/>
                            </ListItemIcon>
                            <ListItemText>Two Pointers</ListItemText>
                        </ListItemButton>
                    </LinkPlain>

                    <LinkPlain to="/algorithm/uncategorized">
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <UncategorizedIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                Uncategorized
                            </ListItemText>
                        </ListItemButton>
                    </LinkPlain>
                </List>
            </List>
        </>
    );
};

export default NavLinks;
