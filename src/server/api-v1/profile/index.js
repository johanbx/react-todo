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
 * @returns {Error} 404 - Profile does not exist
 * @returns {Error} 500 - Unexpected error
 */
const getProfile = (req, res) => {
  const { name } = req.params;
  Profile.findOne({ name }, (err, profile) => (err
    ? res.json({ error: 'Failed to get profile' }, 500)
    : profile
      ? res.json(profile)
      : res.json({ error: 'Could not find profile' }, 404)
  ));
};

/**
 * @route DELETE /profile/{name}
 * @param {Profile.model} name.path.required - Name of profile
 * @returns 204 - Delete a profile
 * @returns {Error} 404 - Profile does not exist
 * @returns {Error} 500 - Unexpected error
 */
const deleteProfile = (req, res) => {
  const { name } = req.params;
  Profile.deleteOne({ name }, (err, { deletedCount }) => (err
    ? res.json({ error: 'Failed to delete profile' }, 500)
    : deletedCount === 1
      ? res.send(204)
      : res.json({ error: 'Could not find profile' }, 404)
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
    ? res.json({ error: 'Failed to create profile' }, 500)
    : res.json(profile, 201)));
};

/**
 * @route GET /profile
 * @returns {Array.<Profile>} 200 - Array of all profiles
 * @returns {Error} 500 - Unexpected error
 */
const getProfiles = (req, res) => {
  Profile.find((err, profiles) => (err
    ? res.json({ error: 'Failed to get profiles' }, 500)
    : res.json(profiles)));
};

router.route('/:name').get(getProfile).delete(deleteProfile);
router.route('/').get(getProfiles).post(createProfile);

export default router;
