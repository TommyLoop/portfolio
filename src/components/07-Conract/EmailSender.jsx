import React from 'react'
import '../../index.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TextField } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';


const validationSchema = Yup.object({
    name: Yup.string().required('Kötelező kitöltendő mező!'),
    email: Yup.string()
        .email('Érvénytelen e-mail formátum!')
        .required('Kötelező kitöltendő mező!'),
    text: Yup.string().required('Kötelező kitöltendő mező!'),
})
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

/**
* E-mail küldő form

* Yup és Formik segítségével validálva
* Material Ui form 
@returns {React.Component} - EmailSender componens
* * Validálva
*/
function EmailSender() {
    const formik = useFormik({
      initialValues: {
            name: '',
            email: '',
            text: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
        },

    });
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true);
      };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    const action = (
        <React.Fragment>
          <Button 
            color="secondary" 
            size="small" 
            onClick={handleClose}>
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
      function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
      }
    
    return (
      <div className='emailSender row m-0'>
        <form 
          onSubmit={formik.handleSubmit}
          className='col-8 mt-5 mx-auto p-2 row'>
            <h4 className='pt-2 email-title text-center'>
              E-mail küldés:
            </h4>
            <div className='firstBackground pt-2 mt-2 
                            contact-border'>
              <TextField
                id="name"
                name="name"
                label="Név"
                className='col-12 pb-2 '
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div className='firstBackground pt-2 mt-4 
                            contact-border'>
              <TextField
                id="email"
                name="email"
                label="E-mail"
                className='col-12 pb-2'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />
            </div>
            <div className='firstBackground contact-border pt-2 mt-4'>
              <TextField
                id="text"
                name="text"
                label="Üzenet"
                className='col-12 pb-2 firstbackground'
                value={formik.values.text}
                onChange={formik.handleChange}
                error={formik.touched.text && Boolean(formik.errors.text)}
                helperText={formik.touched.text && formik.errors.text}
                multiline
                rows={6}
                />
                </div>
                <button 
                    className="btn2 my-4 mx-auto"
                    onClick={handleClick(TransitionUp)}    >
                    <span className="icon">
                      <i className="far fa-envelope"></i>
                    </span>
                    <span className="text">Küldés</span>
                </button>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right', }}
                    onClose={handleClose}
                    TransitionComponent={transition}
                    action={action}>
                    <Alert 
                      onClose={handleClose} 
                      severity="success" 
                      sx={{ width: '20%' }}>
                        Az üzenet elküldve!
                    </Alert>
            </Snackbar>     
        </form>
      </div>
    )
}

export default EmailSender
