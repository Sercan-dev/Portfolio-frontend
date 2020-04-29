import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 React*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <img src='media/Bildschirmfoto 2020-04-24 um 13.51.47.png' ></img>
                        <CardText>
                            This Portfolio
                        </CardText>
                        <CardActions border>
                            <Button colored>
                            GitHub
                            </Button>
                            <Button colored>Website</Button>
                        </CardActions>
 
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simple dummy text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Website</Button>
                        </CardActions>
 
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simple dummy text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Website</Button>
                        </CardActions>
             
                    </Card>
                    
                </div>


            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    {/* Project 1 Python*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121807550/original/fc369c99dc95a93e01f1ff669120bf90c008343f/cinema-4d-3d-animator-python-developer.png) center / cover'}} >Python Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simple dummy text
                        </CardText>
                        <CardActions border>
                            <Button colored>
                            GitHub
                            </Button>
                            <Button colored>Website</Button>
                        </CardActions>
 
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121807550/original/fc369c99dc95a93e01f1ff669120bf90c008343f/cinema-4d-3d-animator-python-developer.png) center / cover'}} >Python Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simple dummy text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Website</Button>
                        </CardActions>
 
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/121807550/original/fc369c99dc95a93e01f1ff669120bf90c008343f/cinema-4d-3d-animator-python-developer.png) center / cover'}} >Python Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simple dummy text
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Website</Button>
                        </CardActions>
             
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/* Project 1 Wordpress*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <img src='/media/Bildschirmfoto 2020-04-25 um 16.14.17.png' ></img>
                        <CardText>
                            I updated this website for a Agency
                        </CardText>
                        <CardActions border>
                            <Button href="https://mthandyland.net" target="_blank" colored>Website</Button>
                        </CardActions>
 
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s.w.org/images/backgrounds/wordpress-bg-medblue-square.png) center / cover'}} >Wordpress Project #2</CardTitle>
                        <CardText>
                            Lorem Ipsum is simple dummy text
                        </CardText>
                        <CardActions border>
                            <Button colored>Website</Button>
                        </CardActions>
 
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s.w.org/images/backgrounds/wordpress-bg-medblue-square.png) center / cover'}} >Wordpress Project #3</CardTitle>
                        <CardText>
                            Lorem Ipsum is simple dummy text
                        </CardText>
                        <CardActions border>
                            <Button colored>Website</Button>
                        </CardActions>
             
                    </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <Tabs avtiveTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Python</Tab>
                <Tab>Wordpress</Tab>
                </Tabs>


                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>


            </div>
        )
    }
}

export default Projects;