import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import SvgIcon from '@material-ui/core/SvgIcon';

import InteractionColors from './../AppTheme';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    width:'100%',
    color:InteractionColors.logColor,
  },
  toolbarTitle: {
    flex: 1,
    fontSize:30,
    // fontFamily: "GothamRounded-Bold"
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    borderBottom: `1px solid ${theme.palette.divider}`,
    width:'100%',
    padding:0,
    paddingLeft:15,
    paddingRight:15
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color:InteractionColors.lightOrange,
    "&:hover": {
      color: InteractionColors.logColor
    },
  },
  small: {
    marginTop:theme.spacing(.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { header, languageBtn } = props;

  return (
    <React.Fragment>
    <header className="header" >
    <ExpansionPanel >
        <ExpansionPanelSummary className={classes.toolbar}>
        <Link href={header.path}> <Avatar alt={header.languageT} src={header.logo} className={classes.medium}/></Link>
          <Typography
            variant="h2"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}>
            {header.title}
          </Typography>
          <Button size="small" color="inherit" href={header.path}>
          <header.icon />
          </Button>
          <Avatar alt={header.languageT} src={header.language} className={classes.small} onClick= {languageBtn}/>
        </ExpansionPanelSummary >
        <ExpansionPanelDetails className={classes.toolbarSecondary}>
       
            {header.sections.map((section) => (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={ section.url}
                    className={classes.toolbarLink}
                    //onClick={ section.redirect===true ? myRouter(section.url): empty()}
                >
                    {section.title}
                </Link> 
          
            ))}
       
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </header>
    </React.Fragment>
    
  );
}

