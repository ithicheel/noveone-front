import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import css from "./style.module.css";
import { useNavigate } from 'react-router-dom';
function AnalystPage() {
    const navigate = useNavigate();
    const editHandler = () => {
        navigate("/chapters");
    }
  return (
    <div style={{background:"#f5f5f5"}}>
        <Sidebar active="novels" />
        <div className={css.content}>
            <h1 className={css.dadad}>Analyst</h1>
            <div className={css.sdf}>
                <div>
                    <div className={css.dash}>
                        <ul>
                            <li>
                                <div></div>
                                <div>
                                    <h3>Novels</h3>
                                    <h3>3</h3>
                                </div>
                            </li>
                            <li>
                                <div></div>
                                <div>
                                    <h3>Comments</h3>
                                    <h3>45</h3>
                                </div>
                            </li>
                            <li>
                                <div></div>
                                <div>
                                    <h3>Views</h3>
                                    <h3>3999</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={css.novels}>
                        <h1>Novels</h1>
                        <div className={css.title}>
                            <div>
                                <h3>Name</h3>
                                <h3>Date</h3>
                            </div>
                            <div>
                                <h3 onClick={editHandler}>Edit</h3>
                            </div>
                        </div>
                        <div className={css.list}>
                            <div>
                                <h3>The Tiny Dragon</h3>
                                <h3>2020-3-23</h3>
                            </div>
                            <div>
                                <h3 onClick={editHandler}>Edit</h3>
                            </div>
                        </div>
                        <div className={css.list}>
                            <div>
                                <h3>The Tiny Dragon</h3>
                                <h3>2020-3-23</h3>
                            </div>
                            <div>
                                <h3>Edit</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.comment}>
                    <h1>Activity</h1>
                    <div className={css.scroll}>
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
                            <p>Ipsum qui tempor enim do cillum tempor occaecat esse veniam excepteur proident in culpa. Eiusmod dolore veniam qui cillum commodo nostrud. Non excepteur aliquip esse eu pariatur veniam labore. Incididunt occaecat anim nulla voluptate aliqua mollit. Lorem elit duis officia laboris labore consequat et duis magna. Excepteur culpa mollit dolor culpa. Ipsum labore et sint cupidatat pariatur laboris proident aute.</p>
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
                            <p>Ipsum qui tempor enim do cillum tempor occaecat esse veniam excepteur proident in culpa. Eiusmod dolore veniam qui cillum commodo nostrud. Non excepteur aliquip esse eu pariatur veniam labore. Incididunt occaecat anim nulla voluptate aliqua mollit. Lorem elit duis officia laboris labore consequat et duis magna. Excepteur culpa mollit dolor culpa. Ipsum labore et sint cupidatat pariatur laboris proident aute.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnalystPage