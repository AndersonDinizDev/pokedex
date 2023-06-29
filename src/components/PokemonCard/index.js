import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function PokemonCard({ name, experience, image, types }) {
  const fadeInAndSlide = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + ' | ' + types[1].type.name
    }
    return types[0].type.name
  }

  return (
    <AnimatePresence>
      <motion.div initial={fadeInAndSlide.initial} animate={fadeInAndSlide.animate}>
        <Card sx={{ maxWidth: 275 }}>
          <CardActionArea>
            <CardMedia component="img" image={image} />
            <CardContent>
              <Box display="flex" flexDirection="column">
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {name}
                </Typography>
                <Typography variant="caption">Exp: {experience}</Typography>
                <Typography variant="caption">Tipo: {typeHandler()}</Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
}

export default PokemonCard
