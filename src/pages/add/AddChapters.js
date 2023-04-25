import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import css from "./style.module.css";

function AddChapters() {
    const navigate = useNavigate();
    const backHandler = () => {
        navigate("/chapters");
    }
  return (
    <div style={{background:"#f5f5f5"}}>
        <Sidebar active="novels" />
        <div className={css.content}>
            <h1 className={css.dadad}>Novels</h1>
            <div className={css.sdf}>
                <div className={css.novels}>
                    <div className={css.addData}>
                        <h1>Chapters</h1>
                        <button onClick={backHandler}>Back</button>
                    </div>
                    <div>
                        <form>
                            <label>Chapter title</label>
                            <input type="text" placeholder='title' />
                            <label>Chapter Number</label>
                            <input type="number" placeholder='number' />
                            <label>Chapter content</label>
                            <textarea rows="15" cols="50" placeholder='content' ></textarea>
                            <label>Chapter price</label>
                            <input type="number" placeholder='price' />
                            <label></label>
                            <input type="submit" value="Add" />
                        </form>
                    </div>
                </div>
                <div className={css.comment}>
                    <h1>Activity</h1>
                    <div className={css.scroll}>
                    <div className={css.commentItem}>
                        <div></div>
                        <div>
                            <h3>Dodobest</h3>
                            <p>Ipsum qui tempor enim do cillum tempor occaecat esse veniam excepteur proident in culpa. Eiusmod dolore veniam qui cillum</p>
                        </div>
                    </div>
                    <div className={css.commentItem}>
                        <div></div>
                        <div>
                            <h3>Dodobest</h3>
                            <p>Ipsum qui tempor enim do cillum tempor occaecat esse veniam excepteur proident in culpa. Eiusmod dolore veniam qui cillum commodo nostrud. Non excepteur aliquip esse eu pariatur veniam labore. Incididunt occaecat anim nulla voluptate aliqua mollit. Lorem elit duis officia laboris labore consequat et duis magna. Excepteur culpa mollit dolor culpa. Ipsum labore et sint cupidatat pariatur laboris proident aute.</p>
                        </div>
                    </div>
                    <div className={css.commentItem}>
                        <div></div>
                        <div>
                            <h3>Dodobest</h3>
                            <p>Ipsum qui tempor enim</p>
                        </div>
                    </div>
                    <div className={css.commentItem}>
                        <div></div>
                        <div>
                            <h3>Dodobest</h3>
                            <p>Ipsum qui tempor enim do cillum tempor occaecat esse veniam excepteur proident in culpa. Eiusmod dolore veniam qui cillum commodo nostrud. Non excepteur aliquip esse eu pariatur veniam labore. Incididunt occaecat anim</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddChapters;