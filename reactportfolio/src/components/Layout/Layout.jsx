import React from 'react';
import './layout.scss';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';

function Layout() {
    return (
        <div className="App">
            <SideBar />
            <div className="page">
                <span className="tags top-tags" > &lt;body&gt;</span>

                <Outlet />

                <span className="tags tags-bottom" >
                    &lt;/body&gt;
                    <br/>
                    <span className="bottom-tag-html" >&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout

