import { Router } from 'express';

import { Profile } from '../../models';

const router = Router();

/**
 * @typedef Profile
 * @property {string} name.required - Profile name
 */

/**
 * @typedef Error
 * @property {string} message.required
 */

/**
 * @route GET /profile/{name}
 * @param {Profile.model} name.path.required - Name of profile
 * @returns {Profile.model} 200 - Profile information
 * @returns {Error} 404 - Could not find profile
 * @returns {Error} 500 - Unexpected error
 */
const getProfile = (req, res) => {
  const { name } = req.params;
  Profile.findOne({ name }, (err, profile) => (err
    ? res.status(500).json({ error: 'Failed to get profile' })
    : profile
      ? res.json(profile)
      : res.status(404).json({ error: 'Could not find profile' })
  ));
};

/**
 * @route DELETE /profile/{id}
 * @param {Profile.model} id.path.required - Profile id
 * @returns 204 - Delete a profile
 * @returns {Error} 404 - Could not find profile to delete
 * @returns {Error} 500 - Unexpected error
 */
const deleteProfile = (req, res) => {
  const { id } = req.params;
  Profile.findOneAndDelete({ _id: id }, (err, profile) => (err
    ? res.json({ error: 'Failed to delete profile' }, 500)
    : profile && String(profile._id) === String(id)
      ? res.status(204).send()
      : res.status(404).json({ error: 'Could not find profile to delete' })
  ));
};

/**
 * @route POST /profile
 * @param {Profile.model} profile.body.required - The new profile
 * @returns {Profile.model} 201 - Profile information
 * @returns {Error} 500 - Unexpected error
 */
const createProfile = async (req, res) => {
  const { name } = req.body;
  new Profile({ name }).save((err, profile) => (err
    ? res.status(500).json({ error: 'Failed to create profile' })
    : res.status(201).json(profile)));
};

/**
 * @route GET /profile
 * @returns {Array.<Profile>} 200 - Array of all profiles
 * @returns {Error} 500 - Unexpected error
 */
const getProfiles = (req, res) => {
  Profile.find((err, profiles) => (err
    ? res.status(500).json({ error: 'Failed to get profiles' })
    : res.json(profiles)));
};

router.route('/:id').get(getProfile).delete(deleteProfile);
router.route('/').get(getProfiles).post(createProfile);

export default router;
