const styles = {
  main: {
    width: '100%',
    backgroundColor: '#0097A7',
    color: 'white',
    fontFamily: 'sans-serif', // google fonts をここで使える？
    fontSize:'30px',
    //backgroundImage:'linearGradient(#fff 50%, transparent 50%, transparent 100%)', //横縞(ボーダー)
    //backgroundImage:'linearGradient(deg= -90, #fff 50%, transparent 50%)', //縦縞(ストライプ)
    //backgroundSize: '14px 14px',
  },
  name: {
    fontSize:'55px',
    marginTop:"50px",
    marginLeft:"20px",
    textAlign:'center'
  },
  affiliation: {
    fontSize:'45/30rem',
    marginTop:"50px",
    marginLeft:"20px",
    textAlign:'center'
  },
  paragraph: {
    fontSize:'20px',
    marginTop:"50px",
    marginLeft:"20px",
  },
  phrase: {
    fontSize:'37px',
    marginTop:"10px",
    //marginLeft:"20px",
    textAlign:'center'
  },
  techStackTop: {
    fontSize:'30px',
    //marginBottom:"5px",
    margin:"40px auto 7px 0"
    //marginLeft:"20px",
  },
  techStack: {
    fontSize:'30px',
    margin:"7px 0",
    //marginLeft:"20px",
  },
  percentBar: {
    width: '30%',
    height: '10px',
    backgroundColor: 'red',
    marginLeft:"35px"
  },
  snsAccount: {
    fontSize:'0.9em',
    margin:"1em 0",
    //marginLeft:"20px",
    //textAlign: center  //center is not defined
  },
  downloadButton: {
    fontSize:'20px',
    marginTop:"20px",
    //margin:'20px 0 0 auto', //autoが効かない
    color:'#0E5D5D',
    padding:'0.5rem',
    //borderColor:'lightgray', //形が崩れる
  },
}
export default styles
