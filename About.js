import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const AboutSection = styled('div')({
  marginTop: '10px',
  padding: '30px',
  textAlign: 'center',
  backgroundColor: 'sandybrown',
  color: 'black',
});

const TeamMember = ({ name, role, description, location, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const googleMapsUrl = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <Grid item xs={12} sm={4}>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          borderRadius: '15px',
          transition: 'transform 0.2s',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <div
          style={{ cursor: 'pointer' }}
          onClick={openGoogleMaps}
          role="button"
          tabIndex={0}
        >
          <img src={imageUrl} alt={name} style={{ width: '100%', borderRadius: '15px 15px 0 0' }} />
        </div>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '100%',
            background: '#fff',
            borderRadius: '0 0 15px 15px',
          }}
        >
          <div>
            <Typography variant="h5">{name}</Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" style={{ marginRight: '5px' }} />
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {role}
              </Typography>
            </div>
            <Typography variant="body2">{description}</Typography>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={openGoogleMaps}>
              Visit
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

const About = () => {
  return (
    <div>
      <AboutSection>
        <Typography variant="h5">Places</Typography>
        <Typography variant="h5">Nature Is Not a Place To Visit It's a Home</Typography>
      </AboutSection>

      <br />

      <Container>
        <Grid container spacing={3}>
          {/* Team Member 1 */}
          {/* (other TeamMembers) */}
          <TeamMember
            name="Ramnagar"
            role="Uttarakand"
            description="Ramnagar is the major gateway of Corbett National park, which is located in Ramanagara district in the state of Uttarakand India. "
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018185.jpg?k=bc0d3db026faca4fba2d622dcf6afc0725e05432192bd8f89095c6432d4c1467&o="
          />
          {/* Team Member 2 */}
          {/* (other TeamMembers) */}
          <TeamMember
            name="Darjeeling "
            role="Uttarakand"
            description="Darjeeling is famous throughout the world for the tea it grows and the great view of the Kanchenjunga range of mountains that it offers."
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018303.jpg?k=9219fd24b359030960aeb0a2c45fb2dfbf54bebde63dfd0e5c7aa641e769fc27&o="
          />
          {/* Team Member 3 */}
          {/* (other TeamMembers) */}
          <TeamMember
            name="Kalpetta"
            role="Kerala"
            description="Kalpetta is a major City, Town and municipality in the Wayanad district, state of Kerala, India. Kalpetta is the headquarters, Capital of Wayanad district,"
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018269.jpg?k=92c3106cab186f31510cc289dd1a4ab236c42f3a07c3d677013e19a5dedb39a1&o="
          />
          {/* Team Member 4*/}
          <TeamMember
            name="Yercaud"
            role="Tamil Nadu"
            description="The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake. Surrounded by some"
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018129.jpg?k=bd5980c4bf5ce545ed949e36f97265e17344d2df186f0d5fe41f92f25d704d89&o="
          />
          {/* Team Member 5 */}
          <TeamMember
            name="Ooty"
            role="TAmil Nadu"
            description="Ooty (short for Udhagamandalam) is a resort town in the Western Ghats mountains, in southern India's Tamil Nadu state."
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018152.jpg?k=9a00eea93bc7558b336b68afa0737f0cfc0a6bb06d46dcf20b26a78f2f3eb50d&o="
          />
          {/* Team Member 6 */}
          <TeamMember
            name=""
            role="karnataka"
            description="Thekkady is a town near Periyar National Park, an important tourist attraction in the Kerala state of India. The name Thekaddy is drived from the word'Thekku'."
            location={{ latitude: 'LATITUDE', longitude: 'LONGITUDE' }}
            imageUrl="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018160.jpg?k=af35a4da6b788e5334927facd8aeae442f9c9474b22a134f0a5ad75beb2f83b8&o="
          />
        </Grid>
      </Container>
    </div>
  );
};

export default About;