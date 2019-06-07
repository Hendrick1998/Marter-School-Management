import React from "react";
import "../../Event.css";

class MyEvent extends React.Component {
    render() {
        return (
            <div>
                
            <nav class="accordion arrows">
                <input type="radio" name="accordion" id="cb1" />
                <section class="box">
                    <label class="box-title" for="cb1">Readme</label>
                    <label class="box-close" for="acc-close"></label>
                    <div class="box-content">Click on an item to open. Click on its header or the list header to close.</div>
                </section>
                <input type="radio" name="accordion" id="cb2" />
                <section class="box">
                    <label class="box-title" for="cb2">Read me too</label>
                    <label class="box-close" for="acc-close"></label>
                    <div class="box-content">Add the class 'arrows' to nav.accordion to add dropdown arrows.</div>
                </section>
                <input type="radio" name="accordion" id="cb3" />
                <section class="box">
                    <label class="box-title" for="cb3">Item 3</label>
                    <label class="box-close" for="acc-close"></label>
                    <div class="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
                </section>
                <input type="radio" name="accordion" id="acc-close" />
            </nav>
        </div>
        )
    }
} export default MyEvent;