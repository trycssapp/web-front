import { Request, Response } from 'express';
import prisma from '../../../lib/prisma';
import { GetIdea } from '../../../lib/schema/idea';
export const anyIdea = async (
      req: Request<GetIdea['params']>,
      res: Response
) => {
      const ideaId = req.params.id;

      const idea = await prisma.idea.findUnique({
            where: {
                  id: ideaId,
            },
            include: {
                  upvotes: {
                        include: {
                              user: true,
                        },
                  },
                  downvotes: {
                        include: {
                              user: true,
                        },
                  },
                  user: true,
            },
      });

      if (!idea) return res.status(404).json({ error: 'Idea not found' });
      else return res.json({ payload: { results: idea } });
};
