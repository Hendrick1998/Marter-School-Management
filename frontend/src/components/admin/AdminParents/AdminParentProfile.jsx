import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import Child from './AdminParentsChild';
import SideNav from "../../SideNavMenu";
class AdminParentProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            childData : [
                {
                    id : 1,
                    name : 'Villa Myo',
                    year : 'Fourth Year',
                    section : 'B'
                },
                {
                    id : 2,
                    name : 'Myo Myat Aung',
                    year : 'Final Year',
                    section : 'B'
                }
            ]
         }
    }
    componentDidMount() {
        $(function(){
            $('.datepicker').datepicker();
          });
          this.setState({
        
          })
    }
    render() { 
        let child_datas = this.state.childData;
        const childComponents = child_datas.map(function(child){
        return <Child key={child.id} name={child.name}/>
        });
        return ( 
            <div>
                <SideNav/>
                <div className='container'>
                    <h2 className='mt-4'>Guardian Info</h2>
                    <div class='row'>
                    <div className='col-lg-8 col-xl-8'>
                        <div className='card' style={{width:'100%',padding:'4px'}}>
                            <form>
                                <div className='row mt-2'>
                                    <div className='col'>
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                    <div className='col'>
                                    <label>Relationship</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                </div>

                                <div className='row mt-2'>
                                    <div className='col'>
                                    <label>Occupation</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                    <div className='col'>
                                    <label>SRC NO:</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                </div>

                                <div className='row mt-2'>
                                    <div className='col'>
                                    <label>Date Of Birth</label>
                                    <input type="text" className="form-control datepicker" placeholder="" />
                                    </div>
                                    <div className='col'>
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                </div>

                                <div className='row mt-2'>
                                    <div className='col'>
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                <button type="button" className="btn btn-primary btn-lg btn-block">SAVE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='row' style={{paddingLeft : '48px',paddingRight:'48px'}}>
                            <div className='card' style={{width:'100%'}}>
                            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhUXGBUaGBcYFxgdHxoYGhUXGBodHx0YHSggHR0lHhcXIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFxAQFysdHR0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQYHAgQFAwj/xABEEAACAQMCBAQDBQUECQQDAAABAgMABBESIQUGMUETIlFhB3GBFDKRofAjQlKxwTNystEkNDVikrPC4fEVQ1OCY3N0/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAQACAwEBAQAAAAAAAAAAARECIRIxQVFxA//aAAwDAQACEQMRAD8AtXHelmjFFeN6DxQKM+9Oilj1p5pUCgdOl7UUBSFZUs0Cx7UZoNBoAGjNKl70DzRmo9xfm+2gYxks8g6pGuoj59h9TXLi5nu7na1tkXOfNLIMjB6lBvj2q4ibZpCuBwu3vwUM00LDPmVY2Bx/utnr8xUgJqAopCigyzRmkKWaDLNApUUGVIUYo+W9A8fWlilWQNAsGijf1FKgxZfessUqKKyFIUZp4oDNI4p/Sg0CFZUqWKDKkaRFaHGeLRWyB5DjJCqo3LMewHeg3mYDfNRLivxCs4kYo/iupICKDud+52x71FPiJzwzE2tu2lMYkYdcnquewHQ/hUAjddipUkg/e/dxjzHse+B7VucU1P8AiHNryReNPcvbhtWi3iUF2XBwSzdATkZOOlcOPmi5MIXxzBbgncsWlk9QD1229AM9aiInGSSSfc/96knBrCIReKdLyDd5XP7KFewI/ffPbpnFayRGxf3niIFjH2S2OSZZCTJMQN848zZyPKNq8Le84fCMx/bPGAOHBC7469c461wJzqdnk8Q5HlLdSM5zj09hW3wNGlYwrIkYf78kmBt6ajvgnAwOtXBNOD84cUZEVI1lVmCLKyHcnfcggHHrjtUng53EMohuzEW3y8LFlT0DDGQagt/zCYhpV5LjwsDUrGOFMeXy6BluuOtcjhfMN4i6IEXBJc/sgxI6nJO5X9ZrOK+g4ZldQ6kFSAVI6EHoa9N6qDg/xCnTQXlt3XIUxaTGwG26nOn6GrW4depLGkiEFWAI+v8AX2rNmDZFOgGnUUsUZFGaBURlSzQaKB5pZ/WKCKM0Dyf0KVGaKKWKMUUsUDFCmjNFA6KCM0qAzSzWRFc7mG7MVtNIOqoxB9Djb86DG14wkk7wIrN4Y87jGkN/DnuflVW818RN9eOELCO3VyCP4UB1Ee5bA/CpDzBx6OwslgiObiVNgPvanG7tnvk96jcUCh5bXWDMbIxjQNg4AfAPckAk+h2rcgg14gRygOOin+v51kVQIdzknBGOg9c9/lW1ccHnKySNGQuEIfBCnUQNvUnPSpfP8PLv7OkeVdCBIdIAbxDhSN9yAu46d63rOIDLEGLMg0qACB1OnpqP671IOMcTimaOGIGO1gj1AFd5HwMsw7ljgb+9TvkLla2kgmjnUPMC8UnUMqYAVT/w52rnXnwqnXUsUyOhOwbI0gdM9j6VNi4rO/vXmdpG6k9v5AegxWNpaySkqoHlVnYk4ARRuT+u4q4YfhTF9nCs/wC2BLB1GNyuNJ9QDvmtcfCthbvELgB3dSW0fuqNh69d/oPSnlExUni+TTqbqNKD7uOpPXrnHavW/wCKTSMXZiGwqnR5QVAAxhe2BUpPJksTTROjNKqjwlVSRJk4JDdgBue9a19ybOJo7VAGnKa3UHZAfVunTf61dhjl8vSyKWMcsSbeYyBTkZ6AEEn6elTP4ZcfeO6+zBleOVm7EYYKTlR2Bx0qHXFiqI+lQ2ltLSlsDV6IvUjY710uSrs206XjQyNCuVLAA4Yrg/kenvSj6BzWQNeVtMHUMOhAI9cEZr0zXJoxTpUxQGadGaM1AA0UUh+s0DzSp4NKqEKdKnqqAH6xQKDRigY/Roo2ooCuHzsubG43C4jY57eXf88V3M1CudprqUyWcNuDE0XnmdsKuc7g+2nce9WCnxMtzOHuJGAYqGl66SehYfw7HpVucn8nQApdEozgkqYmOg4JAcehIzkdN6gHL1qDJH4o/ZIwj1wRB0fzZ87dx7+lXnbxKihVUKo2AAwBW+VI8eI8LinTw5UDJkMB7qcg7VtjHSg0VhSCAEkAAnqQMZ+frWQpE0GgKdY0UDI7+leKWaB2kCKGcAMwG5A6An0r1ozQVV8QeULVXaeSYxmQ4jjWPOSF6eXfc/zrXk5YbNo0XjQROpabrpQoNmKFsAHGd87VaHFPBVfGnC6YvOGYfdOMZ+dVhJcm6gubma6uDGH0mOJMKULA4GrcjfBPb3rcrKyOA8US4j1x6tKnSGK6dWAPMvqp9a6eaifLF7NMlubfQLRUw2reTK5GnA2H7p+VSwVmqZpCnQTUBSxQBQRUGVGaVG9A/rRS3oogY0Y+dIGmTRSAp4pCgGgdOkTSxRQ5wM5qBwXAnkurmC5M5AKLbSZRB2YEfvAgHB+dTW9tVljeJ/uupVsEg4Iwdx0qsOCXkZjurJ4hIkb/ALOIOxlcq4G2r90deu29aiJHy7wuT7TKHnRY41CrbQNhVBB++Oud6lPCuGpbp4cedOSfMxY7+53rXEcFsstwVWMFQ0jYPRV6n3AqueP/ABXOWW1jGMjEj9x38u350zRal3cpGuuRwi7DLHG5OB1rl8V5otbckSygMACVG5ALBQTjpuf51SPE+Zb6YGGWR/NIsgXBBBydIXvpz0HqK2RyTxFonm8I+fZlJ8584OdPfcZ9etXxNXHa81Wsk6W6Sh3dSy43UgEgjI77H8K7WagfLnw/S3nguUkYFVy0b4J1lcdR06n1qc6qlV6E+9RbmDnq0tJfBlLl8AkKucZxgH5g5+lSbVVdc6fD1rmV7iKYB2wSr5wT06joAAMbetJP1K9eF/EeCW4cvIYYETyqy7uerEkZ6dlHWpNwfmy0uWKxTKWGolT5TpHU4PaoAvwoPU3aADvo9vc+vv0rXT4dsqlo72EvjB7DcaWGoH3O3etZEW6wSRMHS6MPYgg/karzivK8VnHL/rE32nMSqg/swx19PTI/CtrkLle5t5fFkmXwwjKIkZioJI3wTgbLnbPWpFznYST2jpFkybFQHK7g+o/HFT1VcPky8jDQW8kjJcwo0ZhB8pA/eIXbVgDrv/Wcn8qg/K188At4JLSQSSAiSUaTlgSMsc5Ixg5PqKmwqUjKgUZoqKYNFI/KigYopGgmoh0UsUUBRQKM0BmnppUxRRWLmsqiPGeLzy3osLZvD0prlmwCQp6AA7Z3H41R1+aOIC3tJpiC2hGOASCc7dR069e1VbypEjxwvcC5ZzI3gPHtoXILM0p2IyTnUe1TWG2kTxGtrp7rQSJbeQqc+oBIBU9cdj0qmuM3xMskMJlWEOzLExPlLYJUr6htse1a4pVr82fEi2gLQCMz+UglWXTuvQnPvv8AWq2s+aIYSWhsom3yPFJcjrjc49fyFRy5t2UkOGViA2koQQfqNxjf61anKvKZmtLeZbS0OpRuzTam7ZbGx77VrJERqb4iXTSeL9ng1gABjFkjHTcnPftWdz8R+JlQSwUHONKL/XPrU3blySPIZeGRZ6ZjY9sfvsK9+HcFaQAwycOfTgaltwcEb9m65qbPwxWb/EHiONJuGHfOlc9OmcV62XNHFLmRYEuW1vkLlguTgnqB122q2o+DXYBH+g9uluw/6qqXnKWReJsIVAljMYHhpjzqoOVUZ9fyqy6N295b4nHbvdXN28Sjcq0srNknA2XI3Jrm29lcvM8DXaKwCEGWVgH1KDsd+invXhxS5v3DCd52GckMHxn5HYVNvg1w+KaK48WJZAHQDWoOPKcgZFPgjA5au2wv2u10knrcjG3fHvtXjJyvc+bEtqwx1W4QAgegOPzq4eIpwy1GJVtkz+6VTUfpjJrW4TxLhNwdMQty7bBTGFY432DAZqaqoze39lFpS48JSxGhJUJzjrhScA46+1du2+IV99nCOEYMpXWSAxyMZ2Oc/Sux8Z7CGK2hEUUaFpDuoUHAU7YHXqK0m5CtYLRLm5nlYMIj+zQYXUB23ON+tXpG9y1IttbwFYXlvZGfwkZ84U+UuMbBDXauuKcTtdNxcrFJB/7iRjzRg+h74+tRbkLjEFqkjIr3Fw0pjiQBgwj6r12CnrsKn3O9+Y+HSsy6WdAukEHDPgYztnHrUqu/w69WaNJUOUcBlyMbH2NbAFc3liwMFpDCdyqKD88ZP5muoRWKF+FFOigWKdKkKA/XWnT+n5UUMYZp0s081A80s0Ypk0UVBeKkWnGIZ8NoukMT4OfOCuk49Pu1OgKjPP3BmntxJFkTQMJI8DqR1H1/mBVg1OeJEtit7HKsc65ARiAs6jdkPvjofXFV/wArNNf8SuJ4JBah9Dv0J2wMDI3OVJqxuGTQcVsdMwBbGmRdgySDqR3HqDVecH4bBb8Xmt1gefS6CJNXlXbLM+Qc4B2rcR1PjfbgG2fYkrKhPc/dI/r+NSD4b3LTcIVIW0yIJIwdjpbJKk+24Nanxk4c0sMDIhYrIw8ozsy+g91FVjY8QuLbL285iVdBMZc5YlQCdJ2bf16bU9wW9w/4eWujNzrmmIGt2dtjjfGMbZz19qI+QYobmK4tZGhCsNcYJIdRn1Od9hvkVV0XxI4kp/tgx22KqfyA716XXP8AxOdfD8QKd8+HGQxHTtnA37Yp401afN3PlvZqygiSUbaFP3TjbUe3y61XPwxinueJfa9OVBdpHxtlgRgZ7/LOMUcicj3FxOs10n7FGywk1Au3Xp3GeudjjG9WlzDw66MaR2LxwAth207hMbaQBj9dqdQdXjEBeGSMfeZHC4IByVIqjrO74hwWQao8RyHJVsFHIGPvDow271Y0vw5Rl1G6uDcf/OWOQflnp261p8DvMyTcL4k0cnhgFHcgalOMdf3sEEHr+FIVnyVFw67L3QAed3JZJmBZDtkAHqvocV3OIcrWMkqzNGivGQ2VbTuDkagPfeqsu/h1dfaZVt4z4at+zk1AZU7qQ2d8f0retPhPeOT4kyR5+8dTOT79s/U96dfo9/i3xQTXdvbggomCSDnJdgO3oB+dWNzLaarYRLbeOh0q0YYLhANiudsjAxUX5Z+FsdtMs0kxk0EMihdI1D13OfXHtUt5ntfFiEQuDAXYAMpALHBOn3z6D0qUVx8JrQLeTs6eHoyiKxHlctuu53YAdvU1IucQt5e2lmjagrNJMFOwAxgEjvsRj/e96jPKlhFA3EL+Q+Ibd3WLxO7/AMRx3JIA+e1Tb4dcHEVuLh8Ga4/aM3cBtwufTcn61aJci47UGlWWawMaeaM0ZoAGnWOR/wCKDQZYFFLHz/OigxBpgUjSqBketMAVjTzVUxQQaQp6qCs+cbGTh90OIWxCrKwWVD90sSTv6A/kfnWvy/diXjtwyzquQuy4IkCKuUz7eo9DVk8U4bFcRmKZA6HBIPqDkHIqqE4LZWvG9DkRQxosia3IGvSpHmJz11HGe1alRcWB3Fa89jE+zxo395VNe4bbI6U9VZV4Q2MS40xIuPRVH9KyFsoJYKoY9TgZP1/D8K9tVc+64zBGzK80aMgBYMwBAPc5PT3oIbzqr3l5Hw5JDEBGZWfP3iQQowCCwBG4/wAqndpFoRV3OlVGT3wMVEOauHWd46st0sVwi+R0kXIGruAdxk+vevXlHiZjd7S4vUnlUZXCnZRsQW6Fuhx1FX4iXO4AyTgAdSarHhdlb8Rvr65mjD26gKjnYAqoBYH5AnPoRUh534JbyD7Rc3E0USABlV8I2+3l9Tkjbfeoxf8AG+EyQi2DTRRRgsujKCXSMFDk+YnbrVgkXwouC1myk5RJZFjPqmxHX3JqaZFQPg/PfCoIo4om0Jt5dDeXVknO25z1O/UVJrDmO3mlMMT62VQxIBKjPYt0De3XepR1iKjnNb2LNFBedWJMYIbGrZeq7ZOcYqRfXrUT+JXDZp7QiEqNB8RtWc4QFsKQNjkCkFeI6pw2eEHeS90oB3C6c53z/wCRV12kYVFXGNIAx8gBVUfC/lb7Qkd7LKXVZJCIiMgsDjVvt136dhVuVeQeaAaM0jWQ8+lIGinQAoooxQLH63p0sn9Cigxp6qWaWaDLNL3yaVMUDzT/ADpUUU6qz43cOUC3uVH7TVoPvGAW3+Rz/wARq0yfeuLzHwJbkxSHOqEuyjbDakZdJz2yR+FJexFOWuYG8KW9GpvHljit7ct2XSm3Yd8np5antteJJqMbhtLMrY7MvUfMVRvLUMdhfJFxA4EK+JGBqYLI+MdPln0yM1b3CYxaQftHTSPElkk6DzOWzn69TvsKtg1uZObPsU0Ylhc27g5nXfS38JUew/P51E+YOXLTik5mt7+PUQNaEhjsMKQMgge3rVkW08c8SuuHjkGQcbEH2PauBxP4f2EwJ8HQx/ejJUg+uOn5UlFecb+FU8QJt5PFXTnB2YsCMADofmTS4R8L7thqkcR+YAjOToIBZtj17YPpUxk5EuEH+j8TuF2Aw/m2HQZBGPwry/8ARuOJjTewyY7Mo327+WteSY7fO3CJJ7CWCEnXpXAyPNpIOnJ9cVWPD/hdeybOVjXORqOcAgHYKTv6/KpkTx8dPsx99vT59KxXgXGLhsT3iQp/+IbnPbbBGPUmpLginEeSrO0lU3N5qiwcqmPELg9NKg4X3616WdlLeKLXh8bxWYfLzMSGduhJP72B0UdNs1POD/D2zh8zqZ5DuzynOT1zp6Z99zUqjRVACqAB2G2PoKeRjG1hCIqDcKoA+QGKhfxD4u4jljhaRJYVWY9NMkRJVhvuQM5I9qkHFeIBp0svMPGjl/aK2CrLp2GOhw2fpVX/ABD4muYo0M4uItdu3iganjdSNWQd8/8AXSCVfBWcmwZf4Znx9QrfTrU/H6FR/kLhj21jDC64dQ2obdS5PUdetSLNS+wVjT96dRSFBNI0gKIYp1iBWQoHRSz+tqKgwpiscUZqhk06WfxozQOnmlSorMCgfresQPSnQVd8VuVlEdxe6iXYwBRj7mDpbBz0ORtjavF+bft1ubF0WFzDJ4ztnEZiwc6cfdOB7jPerO4lw+OeNoZV1I4AZfXBz2+VU98VeX3ju4zbIw8WNY8ID52GRpP8RKhfngVqdonF7x1g1jZ20qmSTwmdwpZfACHLeg1acDfuKmQqsOBcywPN9qEXh/ZrURzMS3kOrATRjcal6joM59KlHJMrpZCW4OCxllJLE4RmLjr2ANSxUorj84RStZzCDV4unyaTg5BB2PyresL1Jo1ljbUjjKnfcf0rZzUFScE5pvx4sbyamjWbUJFUMumMFSTkYGrqSD29a6fw3v7u5uHlmudcaoAUBXBYjAOANsAHI9TUsk5TtWuHuWj1O6sGycqcgKdvkMfU107OyjiGmNFQbfdAA2GBn12rVqNnNec7dgRqION/8u29ehquuNcciPF4CGLCBJ1fCscPoLnGBucDt6fhIrz5f4w0UN/cuAbxH1TRtsAFAUFR106R1PpXL4TB/wCq8VF4YpBbIq6WIwNcRUgHGxySdvl6Vx7ie54tOBblQ8kGmfTlVADsyhz67Lkb77VcPLHCxa2sMAAUog1AHIL4yxyeu+a16R1RTxWOaNVYGRFYmijNFLNOsQay1UBmjNY4ozRD39qKNdFQLFFYk0aqBmlmimv41QgKeKDSBorMUZpUlaoMjXN4rwWKeSGRwS0L60Oe+Mb+o6H6V0QaDVFL81cpzlb+5RZVfx2ygG0sBIbUMbkDJJ69O1afLfNebC4tSZZbq4bQi9QQyhBgk7HA/lV2cQ/sZMfwP/hPY1RXKnKovUjEewDapJNSllOrBXSPMo04IO4ye2a3Ls7RbPEOK/Yo7SFIS2tki0hgCqhdzsN8AZNbXLHMSXkRdRoIZkZCQSCuPTrsQdvWqJ5hlurW6IM8jmB3RCzEsABsd8gZVgfqa7nK89vGvDZi6I/2i4MjFxhEwFGoZ8oIAx8qXiavN5AASSAB1JOwrS4nxiC3QSTSKkbEKGJ2JO43GcDbr0qkoZFZo5JbkvBJeTBg7EBowUBc791OPasLLmNRw64tDKNPixeEjYyIy+W0k9th64yfWp4mri4xzba26K7yqQwVl0kMSrdGGNyu3UVWU3NBmmjisnCSXLu0ryomqFmCjKyYAwEU++B6kYiHGeMLJDDbxgnwmn83qryAoBnfAA/OpDyBygtxOi3MbmMh3yCcMY2KaCQMjck9ew2qyYmpdyPwxOH372yyeKlxCrpJkYLITqGx9ye/TrVlDFVxxrkGO1gNzaPKZ7c+LHrbUNIySoXAG/Xpnappy5xhbq3jnUY1rkj0YbMPxB/KpVdTIoGKx/WKDWQZ9sUyaWaWaB6qCaKWaB5opUUBmijPzoqBUUqMfSqGxpU9qWPegeqkaDvSFFZCg+9Y5oLAUGQNMmuXxjjEduBnzSN/ZxLjU7eij+tRW15zV5HtridYJZcrGsfm8E7rh3+74me3QYpg7nM/MkEUFwPERpY4nJjDebpgZAOepH41x/hhy8YYFmlihEjqCjqp8TQw1YYnbO4G3pUTtOL2lvIR9kSaBSYZ5ZFBuC5yWZkc5Kkjp2wfarC4Pztw+YAR3MYONlY6CMezYrWdI4/FuRWl4h9qBXwmOWB6jMJjJ0lTkghGBzjc7d6gkfDoobxIHgWV4Lho99KiVHiLRBtvv5XOT/F+FyJx+1YkC4hJA3/aLt19/Y1rW1nZSStcIYneTwySGU5ZMlGAB+8OxFJTFWcE5WEssatasssE4FxE2CDDNqZGOdsr0J+R6jbr8t/DuSKO8Wa3hlkKqLdnIK5OrfOMgjK527VZr3ECM0jNErkKGYlQcb6QSd+5wK8r3j1tEuuS4iVT3Lrv8t6eVMRnlv4a2sAjdw7zDSxLEYB04K6R5SMk+vzqUcE4RFaxCGIHSCxydzliScnv1x9K4V98ReHxbePrOM4jUt9M/dz8zUb4h8TZpD/odsSMYzIGLFj0ChMg46/IdKd0WHxbiUUEZkmcKg6k53ztj3PtUP4H4fDbJ7iJmuIZZg4AGkqjsFGlSMsQMbbZ7VFhwGeY/aJneRlI1TXOqKKPBOcI3nbGehAGR77cfj3G7eOVTBNPdSRsGEkpAiBHTTGANgQDtgfOrIJ5xH4kNDdyWz2jOFI0lG8zAjOdJH5A+td3l7nW1u2McblZFBJRxpOBjf071U9hz5dyyAOIJJWZBFJIijwW+7kYGw82/XvVl3HL1nxGJWcpJKnkeaHbzjBYe+/Y560sxNTCgNUI45LccMtVaCRZY0J1/aGYuSzDAUrtt6V78A5/tbho4mYpKyjIZSBrIGVBPfPTNZxUxBpZrBqA1QelKsSaMfKgz1e9FY59qKADUE0s+lGagY9KM0jS1VQ6DSNaPEuLQQY8aVI9Wy62Azjr1NBuPIFBJIAHUn+tVtzP8R8pcRWccrFBpNwoBVTnBPQ+hwTj1qMc284m7eeP7QyQLkRxou03958/d2zUfi5quVQLE4iVGYgRgAZYAYIH3hsfvZ61ucU1IuO8cNlCIY2d72eKN5rh2JKBhq0Jndeufr+ECgchtWdwc5O5znIP41lxe+kmmaaU5d8En6AdvbFayN0rpJ0zvbvXPFiw1yrqcIEjcHB1hlYuW6sQu2/bHpXmnMRc5mtbeYnI1FNDEk5yWjK5PYE71yE3Ne8cW/qewp6Nda5Uu6Qx2q6zuBEzvrDqGABJ/dwc49/SpJZ8l3cqqUtIVPTULj0OCTpdh1yNvQ1FbTij25Zo5NLsCuf9xgc4J3B36irH5PjnWHFjCIRpHi3Nzn54SPUdKjLH0PX3rFahcJ5FVUZr2COIqMCV7lip264BHQdBnt0HfjG04VG5EIur2Qf/AAoCgOcnGV3/ADBzW3x7i1jC6tLK/FJtXmVn/ZIMHOFUaSfY5+lbfCOcrq7kEFpbraRb6pFTX4aAHc7BR29/woI7w7jVpBcPJJbh00jTb6V8rZByxIUahg+UDAyakHDPiFeTygwWqsq5/YxLnU24BdyPIMb7DtUXsbKwuLuWae5fwV87FwA8zliWChBsD6fe3/CQfEDm+KOJbOxCohVG8SI4GnGQq6fzzQRrn7jtzPOyzv5VO0SOGRdumV2Y9iT3z0qKE/oUtWf86xJ3rcmM2ti1lCsGKhsHpnGR6ZG9S6154McTCIGORgUVRtDHGepCg5Mmd9bepqI2lszsFUEk4ACgkkn0A6mpTzZy3DZW8ALN9rlCu6MRhF0nI2GB5vXJ2NS4s1rcA4zbIsgukknOxjQufD1d9QznJ9d9qsaJLHi0bGOPwLiNI2MgXTobBwuofeA0/wAsVTMEeBnv2FTLk2XySwh2UPgzOCdKQINTYHqxOM1nlCJXybz2UdLS8O3mCXLEgNhiBkt27avlmrOVgRkHIqmOKWi3CCMssasDLHqH+rW6gKowO77HTnfY9al/wk4m8tq0Tkt4L6FYgbrgED3x79iKzY0nXSmKxFArAef1+hRRj2/OigxNOlR9aoY/WKMViRRQDnbOdqoX4scbjuLpDEweMRgAjPXU2dj9OlXBzjxHwLOeXuEIG+N28o/nXzZcnUTjfA9f863wnaVjGQazR8An26flXggPYV6O23vXVlkqgq2o4IAK7dfXft6++K8EqT8f4ZbQ2tpLG7vJOpZgwAUDcbY3BDDHvioxGxz70iV72yMzAKCWPQCtmY6MjOrtkHbbbbPUda12yqgno2QD0z2I+W9ZuyeGFA825Ykj12C+nqT39sVFbNheCN1MYV5CGDPINSqW2BUeq9dW+/Qeu1cytl3e4kfWfMfMpfGxLDPTfG/4Vw0ON+uKnPKkVpDGLi4H2iYjKQqQVjC480pPlU5x5TnA3x6TksZ8B5KZo/tN4wtrUYJzszLjIwMbZ6b7nJwK9eJ81eIhsOF27JCww5VSZH7MTjJx0yx39cV1hxCfirrG+JLYSAypGdEaID+9K3mZwN8KAPetjm7ilnFayWlgoXOA0kZVR97JXP3pM7ggevWs/wBVWcFoSuubVHCCV1KuSz4+6D09z6Dsa53U4ru8Z4VciJWOTCmAPMAgJ7qM4OTncdetceAhfnnJx1x863GRIwboMbDYkdQNyOn4fzrKOId8f+KcxGASBnHUY6bnf1rwEpAxQSHk6ESXsCH7pfzEMQcKCxOQdjgV2viJx+zvpBJE8iui6MsnlcAkrg5yDkkbj8KPhG0bXpUgazE/hk5yG2yR2Bxnr/nXnf8AD1k4a2vT9ot7mZWYqSzKF1FdSg7ZbO+3vWfrSHu/ofx/pWzY3fgEZIZX0l1B6qGzpO/fFaNJ/wDv+JrWMp9wXjYnBd1Ls0imSLtI/wB2GNQOkYAyalnJuuz4jPZOAFmAlTT0BxkgZ9sj/wCtVXyjxNre5R1VXbdY9RwFd/KG+mTVnc5MYLjhc7P4jBgjuOjAlMtkbdya58p21FlU81gKZNc1ZfSnWGkelFBlSb/OiiqMJO3zFei96dFREU+Jn+z5vnH/AIxXzr6/P+tKiu3+aV69z9P6UpfvUUVplO+Jf7FtvlJ/zlqv4etFFOP1b8e11+5/dP8AjasJO3yX+VFFVAnQ/KujY/6tJ/8Atj/kaKKUntvcuf2F5/cT/Ea2LT+0g/uD/DSorHJuO/8AGH/2f7ifyaq3H9P86KK1x9M8vbbm/e/XcVqnrSoqwqW/Cv8A2pb/ACf/AJTVM4v7W6//ALJf+TRRWOXtZ6VLH1P0rH96iitRGUff5f1qxOO/7P4R8x/SiipyWLn/AO1N6KK4NCiiiiv/2Q==' 
                                                className='rounded'
                                                alt='Guardian Profile'/>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='card' style={{width : '100%'}}>
                                <div className='card-header'>
                                    Child INFO
                                </div>
                                <div className='col'>
                                    {
                                        childComponents
                                    }
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AdminParentProfile;